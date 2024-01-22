import Prisma from "@prisma/client";
import moment from "moment";
const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

export { prisma };

export interface FilterModel {
  column: string;
  value: string;
}

const buildColumnFilter = (filter: FilterModel) => {
  const entries = Object.entries(filter);
  const [key, value] = entries[0];

  const values = value.split(",");

  let andArray: any = [],
    orArray: any = [];

  values.forEach((value: string) => {
    const nFilter = getFilterType(key, value);
    const obj = key
      .split(".")
      .reduceRight((o, x) => ({ [x]: o }), { ...nFilter });
    if (Object.keys(nFilter)[0] === "not") {
      andArray.push(obj);
    } else {
      orArray.push(obj);
    }
  });

  if (andArray.length > 0 && orArray.length > 0) {
    return {
      AND: [...andArray, { OR: [...orArray] }],
    };
  } else if (andArray.length > 0) {
    return {
      AND: [...andArray],
    };
  } else {
    return {
      OR: [...orArray],
    };
  }
};

const getFilterType = (column: string, value: string) => {
  // if (column.toLowerCase().indexOf("datetime") > -1)
  //   return this.getDateTimeFilterType(column, value);
  value = value.trim();
  let _obj: any = {};
  let pointer;
  let mode = "insensitive";
  let sanatizedvalue = value;
  let firstChar = value[0];
  const secondChar = value[1];
  const lastChar = value[value.length - 1];
  let isNot: boolean = false;

  if (firstChar === "!") {
    firstChar = secondChar;
    _obj["not"] = {};
    pointer = _obj["not"];
    isNot = true;
    if (lastChar === "*")
      sanatizedvalue = sanatizedvalue.substring(1, value.length - 1);
    else sanatizedvalue = sanatizedvalue.substring(1, value.length);
  } else {
    pointer = _obj;
  }

  if (firstChar === "*" && lastChar === "*") {
    sanatizedvalue = sanatizedvalue.substring(1, value.length - 1);
    pointer["contains"] = sanatizedvalue;
  } else if (firstChar === "*") {
    sanatizedvalue = sanatizedvalue.substring(1, value.length);
    pointer["endsWith"] = sanatizedvalue;
  } else if (lastChar === "*") {
    sanatizedvalue = sanatizedvalue.substring(0, value.length - 1);
    pointer["startsWith"] = sanatizedvalue;
  } else {
    pointer["equals"] = sanatizedvalue;
  }
  // _obj["mode"] = mode;
  return _obj;
};

export interface PaginatedResult<T> {
  data: T[];
  meta: {
    total: number;
    lastPage: number;
    currentPage: number;
    perPage: number;
    prev: number | null;
    next: number | null;
  };
}

export type PaginateOptions = {
  page?: number | string;
  size?: number | string;
  sort?: string;
  filters?: FilterModel[] | string;
};
export type PaginateFunction = <T, K>(
  model: any,
  args?: K,
  options?: PaginateOptions
) => Promise<PaginatedResult<T>>;

export const createPaginator = (
  defaultOptions: PaginateOptions
): PaginateFunction => {
  return async (model, args: any = { where: undefined }, options) => {
    const page = Number(options?.page || defaultOptions?.page) || 1;
    const perPage = Number(options?.size || defaultOptions?.size) || 10;
    const sort = options?.sort || defaultOptions?.sort || undefined;
    const rawFilter = options?.filters || defaultOptions?.filters;

    const skip = page > 0 ? perPage * (page - 1) : 0;

    if (rawFilter) {
      const filters = JSON.parse(rawFilter as string);
      args.where = {
        AND: [],
      };
      filters?.forEach((e: FilterModel) => {
        const obj = buildColumnFilter(e);
        args.where.AND.push(obj);
      });
    }

    if (sort) {
      args.orderBy = {};
      sort.split(",").forEach((e) => {
        if (e.includes("-")) {
          args.orderBy[e.replace("-", "")] = "desc";
        } else {
          args.orderBy[e] = "asc";
        }
      });
    }

    const [total, data] = await Promise.all([
      model.count({ where: args.where }),
      model.findMany({
        ...args,
        take: perPage,
        skip,
      }),
    ]);
    const lastPage = Math.ceil(total / perPage);

    return {
      data,
      meta: {
        total,
        lastPage,
        currentPage: page,
        perPage,
        prev: page > 1 ? page - 1 : null,
        next: page < lastPage ? page + 1 : null,
      },
    };
  };
};
