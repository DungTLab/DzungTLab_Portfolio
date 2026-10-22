import './styles/index.css';
import { initPreferences } from './features/preferences';
import { initNavigation } from './features/navigation';
import { initMotion } from './features/motion';

const refreshControlLabels = initPreferences();
initNavigation(refreshControlLabels);
initMotion();
