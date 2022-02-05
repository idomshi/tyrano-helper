import { Ref } from 'vue'
import { useState } from '#app'
import { ImageGroup } from './ImageGroup'

export const add = (groups: Ref<ImageGroup[]>) => (group: ImageGroup) => { groups.value.push(group) }

export const useImageGroups = () => {
    const imageGroups = useState<ImageGroup[]>('imageGroups', () => [])
    return {
        imageGroups: readonly(imageGroups),
        add: add(imageGroups),
    }
}