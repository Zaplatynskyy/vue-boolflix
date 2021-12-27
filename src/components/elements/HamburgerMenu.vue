<template>
    <div class="hamburger_menu">
        <div class="user">
            <div class="info_user">
                <img src="../../assets/img/avatar.png" alt="">
                <span class="name">User</span>
            </div>

            <i class="fas fa-exchange-alt"></i>
        </div>
        <div class="notification">
            <span>Notifiche</span>

            <i class="fas fa-chevron-right"></i>
        </div>
        <div class="downloads">
            <i class="fas fa-download"></i>
            <span>I miei download</span>
        </div>
        <ul class="categories">
            <li>Home page</li>
            <li>Film più popolari</li>
            <li>Film Animazione</li>
            <li>Film Documentari</li>
            <li>Serie più popolari</li>
            <li>Serie animazione</li>
            <li>Serie documentari</li>
        </ul>
    </div>
</template>

<script>
import dataShared from '../../dataShared'

export default {
    name : 'HamburgerMenu',

    data() {
        return {
            dataShared
        }
    }
}
</script>

<style scoped lang="scss">

    .hamburger_menu {
        width: 350px;
        height: 100vh;
        font-size: 18px;
        color: white;
        background-color: #191919;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;

        i {
            cursor: pointer;
        }

        .user {
            
            border-bottom: 2px solid black;
            padding: 25px;
            display: flex;
            justify-content: space-between;
            align-items: center;


            .info_user {
                display: flex;
                justify-content: space-between;
                align-items: center;

                img {
                    width: 60px;
                    margin-right: 15px;
                }
            }
        }

        .notification {
            border-bottom: 2px solid black;
            padding: 25px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;

        }

        .downloads {
            border-bottom: 2px solid black;
            padding: 25px;
            cursor: pointer;

            i {
                margin-right: 15px;
            }
        }

        .categories {
            list-style: none;

            li {
                padding: 20px 25px;
                cursor: pointer;

                &:hover {
                    border-left: 5px solid red;
                    padding: 20px;
                }
            }
        }
    }
</style>