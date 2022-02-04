import React from 'react';
import './mylabel.css'

export interface MyLabelProps{
  /**
   * Este es el mensaje que se va a mostrar
   */
  label:string;
  /**
   * Este es el tamaño por defecto del label
   */
  size: 'normal'|'h1'|'h2'|'h3';
  /**
   * Este es color del label
   */
  color?:'primary'|'secondary'|'tertiary';
  /**
   * Capitaliza toda la label
   */
  allCaps?:boolean
  /**
   * Cambiar color de la fuente
   */
   fontColor?:string
   /**
   * Cambiar color del backgorundcolor
   */

  background?:string
}

export const Mylabel = ({
  label='No label',
  size='normal',
  color='primary',
  allCaps=false,
  fontColor='',
  background=''
}:MyLabelProps) => {
  return (
    <span className={ `label ${ size } text-${color}`  }
      style={{
        color:fontColor,
        backgroundColor:background
      }}
    >
      {
        allCaps ? label.toUpperCase() : label
      }  

    </span>
  );
};


export default Mylabel;