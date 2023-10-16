<template>
    <div>
        This is about page

        <p>Here is a tab</p>

        <v-card>
            <v-tabs v-model="tab" bg-color="primary">
                <v-tab value="one">Item One</v-tab>
                <v-tab value="two">Item Two</v-tab>
                <v-tab value="three">Item Three</v-tab>
            </v-tabs>

            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item value="one">
                        One
                    </v-window-item>

                    <v-window-item value="two">
                        Two
                    </v-window-item>

                    <v-window-item value="three">
                        Three
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>

        <p>Here is hover state</p>

        <v-btn>
            Start
            <v-tooltip activator="parent" location="start">Tooltip</v-tooltip>
        </v-btn>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref(null)
</script>

<style lang="scss" scoped></style>