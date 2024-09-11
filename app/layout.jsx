
//Importations 
import './../styles/globals.css';
import Nav from './../components/nav.jsx';
import Provider from './../components/provider.jsx';

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share Ai Prompts',
}
export default function RootLayout({ children }) {
  return (
    <html Lang='en'>
      <body>
        <Provider>  
          <div className='main'>
            <div className='gradient'></div>
          </div>
          <main className='app'>
            <Nav/>
            {children}
          </main> 
        </Provider>

      </body>
    </html>
  );
}