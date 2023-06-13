import React, { useEffect, useState } from 'react';
import { Navbar } from "./components/Navbar";
import "./App.scss";

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulating a delay to showcase the loading screen
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 10;
        if (newProgress === 100) {
          setIsLoading(false);
          clearInterval(interval);
        }
        return newProgress;
      });
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-screen">
          <div className="loading-spinner">
            <img src="shocknewslogo.png" alt="Loading Spinner" />
          </div>
          <div className="loading-progress">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
            <span className="progress-percentage">{`${progress}%`}</span>
          </div>
        </div>
      ) : (
        <div>
          <Navbar />
          <div className='banner'>
            <h2>Enter a world of adrenaline</h2>
          </div>
          <h3 className='whatis'>What is Shocknews?</h3>
          <p className='testpara'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            voluptatum dolorum doloribus hic, illo officiis reprehenderit
            repellendus, fugiat quaerat tempora molestias deleniti neque
            exercitationem nobis excepturi sunt nisi quia soluta, sit pariatur
            iste itaque explicabo amet obcaecati. Molestias, voluptatem enim
            porro non veritatis quaerat pariatur iste, eos similique ipsam dolore
            quidem, cupiditate voluptate vero. Porro ea quasi doloremque
            dignissimos qui. Eligendi assumenda incidunt odit ipsum ducimus
            dolore excepturi magni saepe, amet delectus, labore asperiores illo
            explicabo dolor et animi eos minus illum repellendus nisi harum?
            Provident maxime a distinctio nesciunt minus, dolores esse vitae
            perspiciatis commodi. Quidem sequi earum esse recusandae a eligendi
            eaque ipsa aut repellendus nesciunt praesentium minus quisquam
            consequatur iure tempora, veritatis sapiente? Laudantium veniam
            eligendi modi, dolores at unde distinctio praesentium similique
            cupiditate quisquam corporis ullam dicta suscipit atque aliquam quia
            quod? Dolorum, eos corrupti veniam aliquam provident libero sapiente,
            quos quae dolores natus culpa amet ut laudantium tempora deserunt
            obcaecati in quaerat dolore odit consectetur facilis. Reiciendis,
            sequi deleniti. Fugit optio aperiam sint inventore ab blanditiis
            magnam vel velit repellendus officiis officia impedit unde autem
            recusandae, obcaecati rem porro aliquam! Nostrum consequatur et
            quisquam sed iusto error eveniet nulla, ullam dolore omnis
            repudiandae voluptatibus odio?
          </p>
        </div>
      )}
    </>
  );
}

export default App;
