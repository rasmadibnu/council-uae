<script setup lang="ts">
import { 
    IconSearch,
} from '@tabler/icons-vue';

let ourService = [
    { id: 1, type:'', icon: 'member.svg', title: 'New Membership' },
    { id: 1, type:'', icon: 'member.svg', title: 'Membership Renewal' },
    { id: 1, type:'', icon: 'member.svg', title: 'Membership Amendment' },
    { id: 1, type:'', icon: 'member.svg', title: 'Membership Cancellation' },
    { id: 1, type:'', icon: 'layer-1.svg', title: 'Issuing a Certification of Origin' },
    { id: 1, type:'', icon: 'layer-1.svg', title: 'Issuing a certification of origin for personal effect' },
    { id: 1, type:'', icon: 'layer-1.svg', title: 'Amendment of Certification of Origin' },
    { id: 1, type:'', icon: 'layer-2.svg', title: 'Signature Attestation' },
    { id: 1, type:'', icon: 'layer-2.svg', title: 'Authenticate Certificate' },
    { id: 1, type:'', icon: 'layer-2.svg', title: 'True Copy' },
    { id: 1, type:'', icon: 'layer-1.svg', title: 'Document Verification' },
    { id: 1, type:'', icon: 'key.svg', title: 'Issuance of ATA Carnet' },
    { id: 1, type:'', icon: 'layer-1.svg', title: 'Modification of ATA Carnet' },
    { id: 1, type:'', icon: 'layer-1.svg', title: 'Replacement of ATA Carnet' },
    { id: 1, type:'', icon: 'layer-1.svg', title: 'Substitute of lost ATA Carnet' },
    { id: 1, type:'', icon: 'layer-1.svg', title: 'Cancellation of ATA Carnet' },
    { id: 1, type:'', icon: 'layer-1.svg', title: 'Mediation' },
    { id: 1, type:'', icon: 'layer-1.svg', title: 'Letters and Certificates' },
    { id: 1, type:'', icon: 'layer-1.svg', title: 'Company Profile' },
    { id: 1, type:'', icon: 'layer-1.svg', title: 'Licensing Business Councils & Groups' },
    { id: 1, type:'', icon: 'layer-1.svg', title: 'Renewing Business Councils & Groups License' },

]
</script>
<template>
    <Jumbotron title="Services">
        <template #breadcrumbs>
            <li>
                <NuxtLink to="/">
                    <p style="background-color: rgba(0, 0, 0, 0.05)">Services</p>
                </NuxtLink>
            </li>
        </template>
        <template #content>
            <div class="flex gap-4 py-8 justify-around">
                <Input placeholder="Keyword" />
                <Select>
                    <SelectTrigger class="w-[250px]">
                        <SelectValue placeholder="All"  />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Service</SelectLabel>
                            <SelectItem value="business">
                            Business Service
                            </SelectItem>
                            <SelectItem value="licensing">
                            Licensing Service
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Button variant="secondary">
                    Search
                    <IconSearch class="w-4 h-4 ml-2"  />
                </Button>
            </div>
        </template>
    </Jumbotron>
    <div class="max-w-6xl py-10 space-y-6 mx-auto xl:px-0 px-8">
        <div class="grid grid-cols-3 gap-5">
            <ServiceCard v-for="data in ourService" :key="data.id" :title="data.title" :image="data.icon" />
        </div>
    </div>
</template>