<template>
    <v-card style="z-index: 1000;">
        <v-layout>
            <v-navigation-drawer v-model="drawer" temporary>
                <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
                    title="John Leider"></v-list-item>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <router-link :to="{ name: 'home' }">
                        <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
                    </router-link>
                    <router-link :to="{ name: 'about' }">
                        <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
                    </router-link>
                </v-list>
            </v-navigation-drawer>
        </v-layout>
    </v-card>

    <v-card max-width="448" class="mx-auto" color="grey-lighten-3">
        <v-layout>
            <v-app-bar color="teal-darken-4">
                <template v-slot:image>
                    <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
                </template>

                <template v-slot:prepend>
                    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                </template>

                <v-app-bar-title>DND App</v-app-bar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </v-app-bar>
        </v-layout>
    </v-card>
    <router-view></router-view>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
</script>

<style scoped></style>