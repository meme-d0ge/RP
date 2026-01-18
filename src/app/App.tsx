import { ModalWindow } from "@/features/modal-window";
import { TheHeader } from "@/widgets/TheHeader";
import { TheMain } from "@/widgets/TheMain";

function App() {
	return (
		<>
			<TheHeader />
			<TheMain />
			<ModalWindow />
		</>
	);
}

export default App;
