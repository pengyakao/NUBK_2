<script>
import { toRefs } from 'vue'
export default {
    props: {
        title: String,
        gender: String,
        age: Number,
        height: Number,
        weight: Number,
        tenure: Number,
        license: Array,
        text: String,
        average: String,
        favorite: Boolean,
        img: String,
        link: String
    },
    setup(props) {
        const { title , gender , age , height , weight , tenure , license , text , average , favorite , img , link} = toRefs(props)
        const genderIcon = (gender.value == 'F') ? 'fa fa-venus' : 'fa fa-mars'
        const licenseInfo = license.value.join('、')
        const textInfo = text.value.join('、')
        const favoriteInfo = favorite.value ? 'color: #ff345f;' : ''
        return {
            title , gender , age , height , weight , tenure , license , text , average , favorite , img , link , genderIcon, licenseInfo ,textInfo , favoriteInfo
        }
    }
};

</script>

<template>
 <div class="card">
                <div class="card-header">
                    <a :href=link class="card-link">
                        <img :src=img class="card-img">
                    </a>
                </div>
                <div class="card-body">
                    <a href="caregiver-detail.html" class="card-link">
                        <div class="card-title">{{title}}<font-awesome-icon :icon=genderIcon /></div>
                        <div class="card-info">{{age}}歲/{{height}}cm/{{weight}}kg　年資{{tenure}}</div>
                        <div class="card-license">{{licenseInfo}}</div>
                        <div class="card-text">照顧經驗：{{textInfo}}</div>
                    </a>
                    <div class="card-rating">
                        <span class="average">{{average}}</span><span class="star"><i class="fas fa-star active"></i><i class="fa fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star"></i></span><span class="total">(25)</span>
                    </div>
                    <a href="javascript:void(0);" class="btn btn-favorite" :style=favoriteInfo><i class="far fa-heart"></i></a>
                </div>
            </div>
</template>

<style lang="scss" scoped>
@import "../../../assets/layout.scss";

</style>
