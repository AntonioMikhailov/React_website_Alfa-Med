import React from 'react'
import Comments from '../../../../components/Comments/Comments'
import H2 from '../../../../components/H2/H2'
import img from '../../../../data/images'
export default function S8Comments() {
  const commentRow = [
    {img: img.sec_8_1, text: 'Я хочу поблагодарить всех врачей в этом центре за качество заботы и     профессионалзма, которые они проявили во время моего пребывания. Высокое качество обслуживание. Буду рекомендовать этот центр.', name: 'Сергей Кокшаров' , signature: 'пациент' },
    {img: img.sec_8_2, text: 'Сегодня мой последний день инфузии. Но я знаю, что вернусь ... не как пациент,     а как посетитель. Я могу сказать только положительные слова о медсестрах в Альфа Мед здесь, в инфузионном отделении, а также на 4-м этаже.', name: 'Ольга Белявская' , signature: 'пациент' },
  ]
  return (
    <section className="home-8">
      <div className="container">
      <H2
subTitle={'Отзывы'}
h2Title={<>Что <span>говорят о нас</span> наши пациенты</>}
text={''}
subTitleStyles={'h8__smallTitle'}
h2TitleStyles={'h8__title'}
textStyles={''}
/>
       <Comments
       commentRow={commentRow}
       />
      </div>
    </section>
  )
}
