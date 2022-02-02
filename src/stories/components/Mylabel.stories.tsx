import { Mylabel } from "../../components/Mylabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default{

  title:"UI/MyLabel",
  component:Mylabel,
  argTypes:{
    color:{control:'select'},
    fontColor:{control:'color'}
  }

} as ComponentMeta<typeof Mylabel>


const Template:ComponentStory<typeof Mylabel> = (args) => <Mylabel  {...args} />


export const basic = Template.bind({});
basic.args={
  size:'normal',
  allCaps:false //capitaliza toda la label
}

export const Allcaps = Template.bind({});
Allcaps.args={
  size:'normal',
  allCaps:true
}


export const Seconday = Template.bind({});
Seconday.args={
 size:'normal',
 color:'secondary'
}

export const Tertiary = Template.bind({});
Allcaps.args={
  size:'normal',
  color:'tertiary'
}

export const CustomFontColor = Template.bind({})
CustomFontColor.args={
  size:'h1',
  fontColor:'#5517ac'
}