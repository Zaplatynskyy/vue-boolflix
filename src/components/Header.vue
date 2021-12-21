<template>
    <header>
        <div class="header_left">
            <i class="fas fa-bars"></i>
            <img src="../assets/img/logo.png" alt="">
        </div>

        <div class="header_right">
          <i class="fas fa-search"></i>
          <i class="fas fa-ellipsis-h"></i>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped lang="scss">
@import '../assets/style/variables.scss';

  header {
    height: 80px;
    background-color : $primary_color;
    display: flex;
    justify-content: space-between;
    align-items: center;

    i {
        font-size: 22px;
        color: white;
        margin: 0 15px;
    }

    .header_left {
      display: flex;
      align-items: center;

      img {
        height: 40px;
      }
    }
  }
</style>
