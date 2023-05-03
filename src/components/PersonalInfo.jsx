import React, { useContext, useState } from 'react';
import '../App.css'
import { Button, Input } from 'dracula-ui';

function PersonalInfo() {


    const  [inputValue, setInputValue] = useState('')
    const [step, setStep] = useState(1);
    const [numInputs, setNumInputs] = useState(1);

    const inputGenerator = () => {
      setNumInputs(numInputs + 1);
    }

    const renderInputs = () => {
      const inputs = [];
      for (let i = 0; i < numInputs; i++) {
        inputs.push(<input key={i} type="text" placeholder={`Input ${i+1}`} />)
      }
      return inputs;
    }

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
          <input type="text" name="" id="" placeholder='Curso'/>
          <p>Concluido? <input type="checkbox" name="" id="" /></p>
          <input type="month" name="" id="" />
          <Button color='purple' className='btns' onClick={handleBack }>Voltar</Button>
          <Button color='purple' className='btns' onClick={handleNext}>Proximo passo</Button>
        </div>
      )
    }

    const renderStep4 = () => {
      return(
        <div className="input-container">
          <h1>Qualificações e Cursos Complementares</h1>
          {renderInputs()}
            <Button color='' className='btns' onClick={inputGenerator}>Mais qualificações?</Button>
            <Button color='purple' className='btns' onClick={handleBack }>Voltar</Button>
          <Button color='purple' className='btns' onClick={handleNext}>Finalizar Curriculo</Button>
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
      {step === 3 && renderStep3()}
      {step === 4 && renderStep4()}
    </div>
  )
}

export default PersonalInfo
