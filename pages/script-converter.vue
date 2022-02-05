<template>
    <div>
        <p>input</p>
        <textarea v-model="inputArea"></textarea>
        <p>output</p>
        <textarea v-model="outputArea"></textarea>
    </div>
</template>
<style scoped>
    textarea {
        display: inline-block;
        vertical-align: top;
        width: 100%;
        height: 8em;
        padding: 8px;
        box-sizing: border-box;
        border-radius: 5px;
        border: 1px solid #e5e5e5;
        outline: none;
        line-height: 1.6;
        resize: vertical;
    }
</style>
<script setup lang="ts">
    const inputArea = ref('')
    const outputArea = computed(() => {
        const lines = inputArea.value.split('\n')
        const result = []
        const character = {}
        console.log(lines)
        for (const line of lines) {
        let match
        if (line.length === 0) { result.push(line) }
        else if (match = /^\s*[＜<](.*)[＞>]\s*$/.exec(line)) { result.push(`; ${match[1]}`) }
        else if (match = /^\s*([^＜<]+)[「『]([^」』]+)[」』]\s*$/.exec(line)) {
            if (!character.hasOwnProperty(match[1])) {
            const num = Object.keys(character).length
            const key = `chara${num}`
            character[match[1]] = key
            }
            result.push(`#${character[match[1]]}\n${match[2]}[l][r]`)
        }
        else { result.push(`${line}[l][r]`) }
        }
        return result.join('\n') 
    })
</script>

