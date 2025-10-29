import { useState } from 'react';

const data = [
  'Import useState function from react ',
  'Use the state variable (getter)',
  'Update the state variable using setter function',
];
function MultiStep() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [user, setUser] = useState({
    name: 'Mueen',
    id: 1,
    status: 'true',
    address: 'j&K',
  });

  // let step = 1;
  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
    setUser((cur) => {
      return {
        ...cur,
        name: 'Mueen',
        id: 1,
        status: 'false',
      };
    });
  };
  const handleNext = () => {
    if (step < data.length) {
      setStep((cur) => cur + 1);
      // setStep((cur) => cur + 1);
      // setStep(step + 1);
    }
    setUser({
      name: 'Faysal',
      id: 2,
      address: 'j&K',
      status: 'true',
    });

    console.log(user);
  };

  return (
    <>
      <p
        style={{
          fontSize: '2rem',
          textAlign: 'right',
        }}
      >
        <button onClick={() => setIsOpen((prev) => !prev)}>&times;</button>
      </p>
      {isOpen && (
        <div className='container'>
          <div className='steps'>
            <p className={`step ${step >= 1 ? 'active' : ''}`}>1</p>
            <p className={`step ${step >= 2 ? 'active' : ''}`}>2</p>
            <p className={`step ${step >= 3 ? 'active' : ''}`}>3</p>
          </div>
          <p className='text-content'>
            Step {step}: {data[step - 1]}
          </p>
          <p>
            {user.name} - #{user.id} - {user.address} - {user.status}
          </p>
          <div className='btn-container'>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}

export default MultiStep;
