import React from 'react'
import Story from './Story'
import './StoryReel.css'
function StoryReel() {
    return (
        <div className='storyReel'>
            <Story className='storyReel__story'
            image='https://cdn.geekwire.com/wp-content/uploads/2018/06/20180507_Microsoft_Satya-630x450.jpg'
            profileSrc='https://upload.wikimedia.org/wikipedia/commons/7/78/MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg'
            title='Satya Nadella'
            />
            <Story className='storyReel__story'
            image='https://www.extremetech.com/wp-content/uploads/2020/03/starship-prototype-640x353.jpg'
            profileSrc='https://c.files.bbci.co.uk/A148/production/_116388214_gettyimages-1175368064.jpg'
            title='Elon Musk'
            />
            <Story className='storyReel__story'
            image='https://static.seattletimes.com/wp-content/uploads/2017/11/11302017_amazon-slu_080727-780x490.jpg'
            profileSrc='https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455'
            title='Jeff Bezos'
            />
            <Story className='storyReel__story'
            image='https://www.cbre.us/-/media/tcc_hsr/countrytcc/images/bu-icons/tcc_buicon_sf.jpg'
            profileSrc='https://static01.nyt.com/images/2020/11/17/business/17techhearing-facebookpreview/merlin_163192374_92604511-ae28-43ba-8d7f-d3fbdae53e01-mobileMasterAt3x.jpg'
            title='Mark Zuckerberg'
            />
            <Story className='storyReel__story'
            image='https://www.thefactsite.com/wp-content/uploads/2018/08/death-star-facts.jpg'
            profileSrc='https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=600'
            title='Darth Vader'
            />
        </div>
    )
}

export default StoryReel
