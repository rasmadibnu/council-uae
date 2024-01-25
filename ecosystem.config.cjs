module.exports = {
  apps: [
    {
      name: "Council UAE",
      port: "3000",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
      env: {
        DATABASE_URL: "mysql://rasmadibnu:rsmdia001@localhost:3306/uae_cms",
        JWT_SECRET_KEY: "kntl0don",
      },
    },
  ],
};
