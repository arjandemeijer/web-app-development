import Wizard from './Comps/Wizard.svelte';

const wizardApp = new Wizard({
  target: document.getElementById('wizard-app'),
});

export default wizardApp;