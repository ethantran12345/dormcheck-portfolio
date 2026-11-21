import { scoreRoommateMatch } from './roommateMatch.ts';
import { parseNotes } from './parseChecklistNotes.ts';
import { normalizeResidenceHallName } from './housing-match.ts';

const viewer = {
  cleanliness: 'Very Clean',
  social_level: 'Quiet',
  guests: 'Rarely',
  sleep: 'Early',
  temp: 'Cold',
};

const roommate = {
  ...viewer,
  guests: 'Occasionally',
  sleep: 'Late',
};

console.log('Roommate compatibility');
console.log(JSON.stringify(scoreRoommateMatch(viewer, roommate), null, 2));

console.log('\nChecklist import');
console.log(JSON.stringify(parseNotes('- [x] Pack bedding\n- [ ] Buy a lamp'), null, 2));

console.log('\nResidence hall normalization');
console.log(normalizeResidenceHallName('Demo Hall'));
