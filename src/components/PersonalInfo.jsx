import React, { useContext, useState } from 'react';
import '../App.css'
import { Button, Input } from 'dracula-ui';

function PersonalInfo() {


    const  [inputValue, setInputValue] = useState('')
    const [step, setStep] = useState(1);

    const handleNext = ( ) => {
      setStep(step + 1 );
    }
    const handleBack = () => {
      setStep(step - 1 );
    }

    const renderStep1= () => {
      return(
        <div className='input-container'>
          <h1>Informacoes pessoais</h1>
          <Input placeholder='Nome' color='white' />
          <Input placeholder='Email' color='white' type='email'/>
          <Input placeholder='Telefone' color='white' type='tel'/>
          <Input placeholder='Cidade' color='white' />
          <Button color='purple' onClick={handleNext}>Proximo passo</Button>
        </div>
      )
    }

    const renderStep2 = () => {
      return(
        <div className='input-container'>
          <h1>Objetivos</h1>
          <textarea name="objetivo" id="objetivo" cols="30" rows="10"></textarea>
          <Button color='purple' className='btns' onClick={handleBack }>Voltar</Button>
          <Button color='purple' className='btns' onClick={handleNext}>Proximo passo</Button>
        </div>
      )
    }

    const renderStep3 = () => {
      return(
        <div className='input-container'>
          <h1>Formação acadêmica</h1>
          in
        </div>
      )
    }


    const handleSubmit = () => {
        //Save the user Submit
    }

  return (
    <div>
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
    </div>
  )
}

export default PersonalInfo
