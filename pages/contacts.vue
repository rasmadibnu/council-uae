<script setup lang="ts">
import { 
    IconAddressBook,
    IconBuildingSkyscraper
} from '@tabler/icons-vue';
</script>
<template>
    <Jumbotron title="Contact Us">
        <template #breadcrumbs>
            <li>
                <NuxtLink to="/">
                    <p style="background-color: rgba(0, 0, 0, 0.05)">Contact Us</p>
                </NuxtLink>
            </li>
        </template>
    </Jumbotron>
    <div class="max-w-6xl py-10 space-y-6 mx-auto xl:px-0 px-8">
        <div class="grid md:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <div class="flex justify-between items-center">
                        <CardTitle class="font-medium text-3xl text-primary">Contact Details</CardTitle>
                        <IconAddressBook class="text-primary" :size="40" />
                    </div>
                </CardHeader>
                <CardContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nam! Ea nostrum minus, porro repellendus perferendis doloribus qui voluptatem, provident consequuntur veritatis dolor exercitationem! Inventore repellat ducimus ab fuga enim.
                    <!-- <Table>
                        <TableBody>
                            <TableRow class="border-0">
                                <TableCell>Toll Free</TableCell>
                                <TableCell>: <span class="text-secondary" >800 242 6237 (800 CHAMBER)</span></TableCell>
                            </TableRow>
                            <TableRow class="border-0">
                                <TableCell>International</TableCell>
                                <TableCell>: <span class="text-secondary" >(+971) 4 228 0000</span></TableCell>
                            </TableRow>
                            <TableRow class="border-0">
                                <TableCell>Fax</TableCell>
                                <TableCell>: <span class="text-secondary" >(+971) 4 202 8888</span></TableCell>
                            </TableRow>
                            <TableRow class="border-0">
                                <TableCell>Email</TableCell>
                                <TableCell>: <span class="text-secondary" >customercare@dubaichamber.com</span></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table> -->
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <div class="flex justify-between items-center">
                        <CardTitle class="font-medium text-3xl text-primary">Main Office Address</CardTitle>
                        <IconBuildingSkyscraper class="text-primary" :size="40" />
                    </div>
                </CardHeader>
                <CardContent>
                    Dubai Chambers, Baniyas Road, Deira, Dubai, U.A.E


                    <Table>
                        <TableBody>
                            <TableRow class="border-0">
                                <TableCell class="pl-0">P.O Box</TableCell>
                                <TableCell class="pl-0">: <span class="text-secondary" >1457</span></TableCell>
                            </TableRow>
                            <TableRow class="border-0">
                                <TableCell class="pl-0">Makani</TableCell>
                                <TableCell class="pl-0">: <span class="text-secondary" >3035894820</span></TableCell>
                            </TableRow>
                            <TableRow class="border-0">
                                <TableCell class="pl-0">Fax</TableCell>
                                <TableCell class="pl-0">: <span class="text-secondary" >(+971) 4 202 8888</span></TableCell>
                            </TableRow>
                            <TableRow class="border-0">
                                <TableCell class="pl-0">Email</TableCell>
                                <TableCell class="pl-0">: <span class="text-secondary" >customercare@dubaichamber.com</span></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d81620.87374320111!2d55.293309680157144!3d25.298589910020482!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ccd43a579ef%3A0x5cfdfe960734b570!2sDubai%20Chambers!5e0!3m2!1sen!2sid!4v1705234667430!5m2!1sen!2sid" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>