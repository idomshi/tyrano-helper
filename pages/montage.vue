<script setup lang="ts">
import { ImageGroup } from '~~/composables/ImageGroup';
import { Pattern } from '~~/composables/Pattern';
const imageGroups = useState<ImageGroup[]>('imageGroups', () => [])
const group1: ImageGroup = {
    groupName: '01',
    default: 0,
    images: [
        {
            source: 'data:image/webp;base64,UklGRs4BAABXRUJQVlA4IMIBAABQGACdASq0AEABPpFIpEylpKQiIdYoILASCWlu4XYBG5bZ72k6UjoK4oCZXU7qeZeIXTup5l4hdO6nmXiF07qeZeIXTup5l4hdO6nmXiF07qeZeIXTup5l1LSilAPgIvfTHDGJ2eMBzHJmMEcoeCrTzdQ/rWXUxmtSDLYAG370b/ZhFTosquaS4TSpna7L/B1khDEogACZxiSu1ye6jFzfU8y8QundTzLxC6d1PMvELp3U8y8QundTzLxC6d1PMvELp3U8y8QundTwgAD+/ypIAAARN2Z2X243oGZBvOLJN9rONYAIi09EMSxADUAZXxvQMdW4xpcnYgJGCefmn/8SCr1TfomUngyHu4PxtF9dugndH3/uv7ajC+Z2oiFSoB5YbmZg6Awvju88Uji3h4aNUyoJK8Mb4A6Irnt59ahFwZaR/LkUIYBtb9Q4kU8FXCkFU2ykJhsgo4Itt7BnIKSkkTeg7ljH382M+8cSUC8H8QM3eXnRht389KabqZAQnW0c6Ke+b2t1wgHxFiPcQ1VL0nWqfXRbidz1vXJE8OhKrXFyXKmCe/8WvBt+S1bIBvQVsRzqunpC3Y4TxLfuAAAAAAA=',
            name: '1.webp',
        },
        {
            source: 'data:image/webp;base64,UklGRu4BAABXRUJQVlA4IOIBAADwGQCdASq0AEABPpFIokwlpKOiIhZoKLASCWlu4XYBG7Nws196KfL7bEShc8WeZvqx5mb6seZm+rHmZvqx5mb6seZm+rHmZvqx5mb6seZm+rHmZvqx5mb6seZm+TcFnACN79H5etVdRDut712bl0Ftxpk0srwl7TBm/b58MBCax5KLFaG1kWYzC8ZbEbvveq5tTwPALkxvJphuI02Zi378yAsiE2y7sA+h8XM31Y/Xm+rHmZvqx5mb6seZm+rHmZvqx5mb6seZm+rHmZvqx5mb6seZm+rHhAAA/v8qSAAAETdRxbU9yU5EWl6+M3xlxKzJi7sXZiotgfWexS0NwRZCMIMIBBspJivbJyU93Mv7SBRReeDIe7sm9HGf3J8zDACs8qMxq2Vm69KSQhKgDZV9gRNt/zHMFNqODyqERZa8I9WjrXyfNXpFYXDvbjOHkaOjABCcVjUVpjtsW9SBRPRudJma+fXCHk5HqqWvAWLji+9VuZpjxFWv/aOI+21qWqQe34egnf+jcdC2wv4FRZCOSrU/4m0C8ZXluWj9HLNRSq9Nur2Q/d4a2d1kXdvrze0wUAVAiIGehiEVTLkko0l0yJFYh6w3eVtH6ki6tQiYKFFomnH7m/kiyFuy/zAAAAAAAA==',
            name: '2.webp',
        }
    ]
}
imageGroups.value.push(group1)
const pattern = ref<Pattern>([1, 0])
const select = computed(() => {
    return imageGroups.value.map((v, i) => v.images[pattern.value[i]]).filter(v => v !== undefined)
})

const changeimage = () => {
    pattern.value[0] = pattern.value[0] == 0 ? 1 : 0
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
        <button @click.prevent="changeimage">change</button>
        <p>{{select.length}}</p>
        <img
            v-for="(v, i) of select"
            :key="i"
            :src="v.source"
            :alt="v.name"
        />
    </div>
</div>
</template>