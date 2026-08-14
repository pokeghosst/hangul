<script lang="ts">
	import { alphabet, type Alphabet } from '$lib/alphabet';
	import appState from '$lib/AppState.svelte';

	import PlaySoundButton from './PlaySoundButton.svelte';

	let correct = $state(0);
	let total = $state(0);
	let currentAnswer = $state('');
	let answeredIncorrectly = $state(false);

	let selectedGroups = $derived(filterGroups(alphabet, appState.enabledGroups));
	let currentLetter = $derived(pickRandomLetter(selectedGroups));

	function checkAnswer(correctAnswer: string[], currentAnswer: string) {
		if (correctAnswer.includes(currentAnswer)) return true;

		for (let i = 0; i < currentAnswer.length; i++) {
			for (let j = 0; j < correctAnswer.length; j++) {
				if (correctAnswer[j][i] !== currentAnswer[i]) return false;
			}
		}

		return null;
	}

	function pickRandomLetter(group: Alphabet) {
		const subGroup = group[Math.floor(Math.random() * group.length)];
		const letter = subGroup.letters[Math.floor(Math.random() * subGroup.letters.length)];

		return letter;
	}

	function filterGroups(alphabet: Alphabet, groupsToEnable: boolean[]) {
		return alphabet.filter((_, index) => groupsToEnable[index]);
	}

	function processAnswer(event: Event) {
		currentAnswer = (event.target as HTMLInputElement).value;

		if (!currentAnswer) return;

		const result = checkAnswer(currentLetter.romanization, currentAnswer);

		if (result === null) return;

		if (result === true) {
			if (!answeredIncorrectly) {
				correct++;
			}

			total++;
			currentAnswer = '';
			answeredIncorrectly = false;
			currentLetter = pickRandomLetter(selectedGroups);
		} else {
			answeredIncorrectly = true;
		}
	}
</script>

<div class="trainer">
	<div class="letter-container">
		<div class="romanization">{currentLetter.romanization}</div>
		<div class="letter">{currentLetter.letter}</div>
	</div>
	{#if total == 0 && !answeredIncorrectly}
		<p class="tip">
			Hover over the character to see its romanization, then type the correct answer.
		</p>
	{/if}

	<input
		type="text"
		autocapitalize="off"
		autocorrect="off"
		spellcheck="false"
		class="form-control"
		name="letter"
		id="letter"
		oninput={processAnswer}
		style="width: 220px;"
		placeholder="Type romanization..."
		bind:value={currentAnswer}
	/>

	{#if answeredIncorrectly}
		<p class="correction">
			{currentLetter.letter} = {currentLetter.romanization}
		</p>
	{/if}
	{#if total > 0}
		<div class="score">
			{correct} / {total}
		</div>
	{/if}
	<PlaySoundButton letter={currentLetter.letter} />
</div>
