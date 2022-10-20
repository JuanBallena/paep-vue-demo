<template>
    <div class="g-dashboard">
        <div class="g-dashboard__sidebar">
            <div class="a-title--sm u-color-success">Administrador</div>

            <ul class="m-menu">
                <li>
                    <router-link active-class="a-link-menu--active" :to="{ name: 'Usuarios' }">
                        <i class="fas fa-users"></i> Usuarios
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="g-dashboard__main">
            <router-view v-slot="{ Component }">
                <transition name="component-fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
    </div>
</template>