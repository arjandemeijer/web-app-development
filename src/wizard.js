import Wizard from './Pages/Wizard.svelte';

const wizardApp = new Wizard({
  target: document.getElementById('wizard-app'),
});

export default wizardApp;