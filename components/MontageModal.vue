<template>
    <div>
        <input type="file" id="files" name="files[]" multiple @change="handleFileSelect" />
        <output id="list">{{ig}}</output>
    </div>
</template>

<script setup lang="ts">
import { ImageGroup } from '~~/composables/ImageGroup';
import PartImage from '~~/composables/PartImage';

const ig = computed(() => JSON.stringify(imageGroups.value))
const imageGroups = useState<ImageGroup[]>('imageGroups')
const handleFileSelect = (evt: Event) => {
    const files = (evt.target as HTMLInputElement).files
    console.log(files)
    for (let i = 0; i < files.length; ++i) {
        const reader = new FileReader()
        reader.onload = (file) => {
            // imageGroups.value.push(file.target.result)
            const imageGroup: ImageGroup = {
                groupName: 'hoge',
                default: -1,
                images: [],
            }
            const partImage = new PartImage(file.target.result as string)
            imageGroup.images.push(partImage)
            imageGroups.value.push(imageGroup)
        }
        reader.readAsDataURL(files[i])
    }
    
}
</script>