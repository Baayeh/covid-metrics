import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 3000);
  };

  return (
    <section className="landing flex flex-col h-screen justify-center items-center">
      <h1 className="text-4xl font-bold">COVID-19</h1>
      <p className="text-4xl font-semibold">Tracker App</p>
      <Button
        label="View Data"
        loading={isLoading}
        className="landing-btn border px-5 py-3 mt-6 uppercase rounded-full text-2xl"
        onClick={handleNavigate}
      />
    </section>
  );
};

export default LandingPage;
