import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { Main } from "./pages/Main/Main";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Main />
    </QueryClientProvider>
  );

}
