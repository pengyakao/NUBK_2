<script>
import { toRefs } from 'vue'
export default {
    props: {
        name: String,
        gender: String,
        age: Number,
        height: Number,
        weight: Number,
        seniority: String,
        license: Array,
        experience: String,
        star: String,
        comments: Number,
        favorite: Boolean,
        img: String,
        link: String
    },
    setup(props) {
        const { name , gender , age , height , weight , seniority , license , experience , star , comments , favorite , img , link} = toRefs(props)
        const genderIcon = (gender.value == 'F') ? 'fa fa-venus' : 'fa fa-mars'
        const licenseInfo = license.value.join('、')
        const experienceInfo = [];
        experience.value.forEach(function(item, index){
            console.log(item.name);
            experienceInfo.push(item.name);
        });
        const favoriteInfo = favorite.value ? 'color: #ff345f;' : ''
        return {
            name , gender , age , height , weight , seniority , license , experience , star , comments , favorite , img , link , genderIcon, licenseInfo ,experienceInfo , favoriteInfo
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
                        <div class="card-title">{{name}}<font-awesome-icon :icon=genderIcon /></div>
                        <div class="card-info">{{age}}歲/{{height}}cm/{{weight}}kg　年資{{seniority}}</div>
                        <div class="card-license">{{licenseInfo}}</div>
                        <div class="card-text">照顧經驗：{{experienceInfo.join('、')}}</div>
                    </a>
                    <div class="card-rating">
                        <span class="average">{{star}}</span><span class="star"><i class="fas fa-star active"></i><i class="fa fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star"></i></span><span class="total">({{comments}})</span>
                    </div>
                    <a href="javascript:void(0);" class="btn btn-favorite" :style=favoriteInfo><i class="far fa-heart"></i></a>
                </div>
            </div>
</template>

<style lang="scss" scoped>
@import "../../../assets/layout.scss";

</style>
