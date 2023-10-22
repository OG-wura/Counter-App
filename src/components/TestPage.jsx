import { useContext, useEffect } from "react";
import { ErrorContext } from './ErrorBoundaryTestPage'


const TestPage = () => {
    const error = useContext(ErrorContext);
    console.log('Error in TestPage:', error);
  
    useEffect(() => {
      throw new Error("This is a test error inside TestPage component.");
    }, []);
return (
    <div className="error-page">
      <h1>
        Test Page
      </h1>
      {error && (
        <div className="mt-4 text-red-500">
          Error occurred: {error.message}
        </div>
      )}
    </div>
  );
};

export default TestPage;
