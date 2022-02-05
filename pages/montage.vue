<script setup lang="ts">
import { ImageGroup } from '~~/composables/ImageGroup';
import { Pattern } from '~~/composables/Pattern';
import PartImage from '~~/composables/PartImage';
const imageGroups = useState<ImageGroup[]>('imageGroups', () => [])
const pattern: Pattern = []
const select = (groups: ImageGroup[], pattern: Pattern): PartImage[] => {
    return []
}
</script>

<template>
<div>
    <montage-modal></montage-modal>
    <div id="selector">
        <p>ラジオボタンを並べるところ</p>
    </div>
    <div id="tagview">
        <p>生成したタグを表示するところ</p>
    </div>
    <div id="imageview">
        <p>組み合わせた画像を表示するところ</p>
    </div>
</div>
</template>