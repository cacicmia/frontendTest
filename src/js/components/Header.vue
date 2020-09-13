<template>
    <header class="header">
        <nav class="page-nav" id="page-navigation">
            <div class="page-nav__expansion-container" v-show="active">
                <a class="page-nav__menu-control" id="menu-close" @click="active=false" >
                    <span>Close</span>
                    <MenuClose/>
                </a>
                <ul class="page-nav__menu">
                    <li class="page-nav__text">Task 6 - Menu</li>
                    <li class="page-nav__nav-item">
                        <a href="#task-3" class="page-nav__nav-link" @click="active=false">Task 3</a>
                    </li>
                    <li class="page-nav__nav-item">
                        <a href="#task-4" class="page-nav__nav-link" @click="active=false">Task 4</a>
                    </li>
                    <li class="page-nav__nav-item">
                        <a href="#task-5" class="page-nav__nav-link" @click="active=false">Task 5</a>
                    </li>
                </ul>
                <div class="page-nav__logo-container">
                    <Logo/>
                </div>
            </div>
            <a class="page-nav__menu-control" id="menu-open" @click="active = true" v-show="!active">
                <span>Menu</span>
                <Menu/>

            </a>

            
        </nav>

    </header>
</template>

<script>
import Menu from '../../../assets/notus-meni.svg'
import MenuClose from '../../../assets/notus-meni-close.svg'
import Logo from '../../../assets/notus-logo-meni.svg'

export default {
    components: {
        Menu,
        MenuClose,
        Logo
    },
    data() {
        return {
            active: false
        }
    },
    methods: {

    }

}
</script>

<style>

</style>