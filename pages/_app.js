import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'antd/dist/antd.css';
import 'styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
