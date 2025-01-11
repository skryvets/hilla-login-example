import {useAuth} from "Frontend/auth";
import {useSignal} from "@vaadin/hilla-react-signals";
import {LoginOverlay} from "@vaadin/react-components";
import {useNavigate} from "react-router-dom";

export default function Login() {

  const {login} = useAuth();
  const hasError = useSignal(false);
  const navigate = useNavigate()

  return (
    <LoginOverlay
      opened
      error={hasError.value}
      noForgotPassword
      onLogin={async ({detail: {username, password}}) => {
        const {error} = await login(username, password);
        hasError.value = Boolean(error);
        if (!error) {
          //tried navigate('/dashboard')
          window.location.replace('/dashboard')
        }
      }}
    />
  );
}