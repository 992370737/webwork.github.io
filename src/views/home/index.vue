<template>
  <div>
    <div class="top-bar">
      <Top></Top>
    </div>
    <Title></Title>
    <RotationPart></RotationPart>
    <div class="second-part">
      <FlashPurchasePart></FlashPurchasePart>
      <ShowGoodsPart></ShowGoodsPart>
      <Bottom></Bottom>
    </div>
  </div>
</template>

<script>
import Top from '@/components/Top'
import Title from '@/components/Title'
import Bottom from '@/components/Bottom'
import RotationPart from './components/RotationPart'
import FlashPurchasePart from './components/FlashPurchasePart'
import ShowGoodsPart from './components/ShowGoodsPart'

export default {
  components: {
    Top,
    Title,
    Bottom,
    RotationPart,
    FlashPurchasePart,
    ShowGoodsPart
  }
}
</script>

<style scoped>
.second-part {
  width: 100%;
  height: 1200px;
  background-color: #f3f3f3;
}
.top-bar {
  width: 100%;
  background: #f5f5f5;
}
</style>
