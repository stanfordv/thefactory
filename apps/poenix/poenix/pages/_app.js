import './styles.css';

import { useState } from 'react';

function CustomApp({ Component, pageProps }) {
  const [user, setUser] = useState('ben');
  const [project, setProject] = useState('test');
  const [mode, setMode] = useState('none');
  const [fieldValue, setFieldValue] = useState('');
  function changeUser(e) {
    e.preventDefault();
    setUser(fieldValue);
    setMode('none');
  }
  return (
    <div
      className="App"
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div
        style={{
          position: 'relative',
          border: '3px solid black',
          width: '100%',
        }}
      >
        {user ? <div user={user} project={project} /> : null}
        {/* {user ? <Column0 user={user} project={project} /> : null} */}
        {mode === 'none' ? (
          <div
            style={{
              position: 'absolute',
              left: '10px',
              bottom: '10px',
              zIndex: '100',
              border: '1px solid black',
              borderRadius: '3px',
              background: 'white',
            }}
          >
            &nbsp;
            <span onClick={() => setMode('login')}>@</span>
            &nbsp; &nbsp;
            <span>?</span>
            &nbsp; &nbsp;
            <span onClick={() => setMode('copyright')}>&copy;</span>
            &nbsp;
          </div>
        ) : (
          ''
        )}

        {mode === 'login' ? (
          <div
            style={{
              position: 'absolute',
              left: '10px',
              bottom: '10px',
              zIndex: '100',
              border: '1px solid black',
              borderRadius: '3px',
              background: 'white',
            }}
          >
            <span>
              <form onSubmit={(e) => changeUser(e)}>
                <span onClick={() => setMode('none')}>&nbsp;X&nbsp;</span>
                <label>User: </label>
                {!user ? (
                  <input
                    type="text"
                    value={fieldValue}
                    onChange={(e) => setFieldValue(e.currentTarget.value)}
                    autoFocus
                    onFocus={(e) => e.currentTarget.select()}
                  ></input>
                ) : (
                  <span>
                    <button className="link" onClick={(e) => setUser('')}>
                      {user}
                    </button>
                  </span>
                )}
              </form>
            </span>
          </div>
        ) : (
          ''
        )}
        {mode === 'copyright' ? (
          <div
            style={{
              position: 'absolute',
              left: '10px',
              bottom: '10px',
              zIndex: '100',
              border: '1px solid black',
              borderRadius: '3px',
              background: 'white',
            }}
          >
            &nbsp;
            <span onClick={() => setMode('none')}>X</span>
            &nbsp;
            <span>All rights reserved: Benjamin Brink Allsopp</span>
          </div>
        ) : (
          ''
        )}
      </div>
      <div
        style={{
          position: 'relative',
          border: '3px solid black',
          //width: "300px"
        }}
      >
        <div setProject={setProject} />
      </div>
    </div>
  );
  // return (
  //   <>
  //     <Head>
  //       <title>Welcome to poenix!</title>
  //     </Head>
  //     <main className="app">
  //       <Component {...pageProps} />
  //     </main>
  //   </>
  // );
}
export default CustomApp;
