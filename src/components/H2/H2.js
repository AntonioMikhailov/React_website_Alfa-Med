import React from 'react'

export default function H2({subTitle, h2Title, text, subTitleStyles, h2TitleStyles, textStyles}) {
  return (
   <>
    <h3 className={subTitleStyles}>{subTitle}</h3>
            <h2 className={h2TitleStyles}>{h2Title}</h2>
            <h3 className={textStyles}>{text}</h3>
   </>
  )
}
