describe('On Start App Flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  describe('Animated Splash Screen Show on Start App', () => {
    it('should have show splash screen animated', async () => {
      const animatedImage = await element(by.id('splash_image'));
      const animatedTitle = await element(by.id('splash_title'));

      await expect(animatedImage).toBeVisible();
      await expect(animatedTitle).toBeVisible();
    });
  });

  describe('On Finish Animated Splash, Show Onboarding Screen', () => {
    it('on animated splash finish, should have show onboarding screen', async () => {
      await waitFor(element(by.id('description_onboarding')))
        .toBeVisible()
        .withTimeout(10000);
    });

    describe('Onboarding Toggle Screens Flow', () => {
      describe('Screens toggle with "next" button tap', () => {
        const nextButton = element(by.id('next_onboarding'));

        it('should have show second page on tap "next" button', async () => {
          await nextButton.tap();
          const titleSecondScreen = element(by.text('Crop'));
          await expect(titleSecondScreen).toBeVisible();
        });

        it('should have show last page on tap "next" button', async () => {
          await nextButton.tap();
          const titleLastScreen = element(by.text('Gallery'));
          await expect(titleLastScreen).toBeVisible();
        });
      });

      describe('Screens return with swipe right action', () => {
        const listPagesOnboarding = element(by.id('list_pages_onboarding'));

        it('should have return to second screen on swipe', async () => {
          await listPagesOnboarding.swipe('right');
          const titleSecondScreen = element(by.text('Crop'));
          await expect(titleSecondScreen).toBeVisible();
        });

        it('should have return to first screen on swipe', async () => {
          await listPagesOnboarding.swipe('right');
          const titleFirstScreen = element(by.text('Select'));
          await expect(titleFirstScreen).toBeVisible();
        });
      });

      describe('Screens go to next page with swipe left action', () => {
        const listPagesOnboarding = element(by.id('list_pages_onboarding'));

        it('should have return to second screen on swipe', async () => {
          await listPagesOnboarding.swipe('left');
          const titleSecondScreen = element(by.text('Crop'));
          await expect(titleSecondScreen).toBeVisible();
        });

        it('should have return to first screen on swipe', async () => {
          await listPagesOnboarding.swipe('left');
          const titleLastScreen = element(by.text('Gallery'));
          await expect(titleLastScreen).toBeVisible();
        });
      });
    });
    describe('Get Started Button Navigate To Home Screen', () => {
      it('should be navigate to home screen on tap get started button', async () => {
        const getStartedButton = await element(by.id('get_started'));
        await getStartedButton.tap();

        const homeScreen = await element(by.id('home_screen'));
        await expect(homeScreen).toBeVisible();
      });
    });

    describe('On click Skip Navigate to Home Screen', () => {
      beforeEach(async () => {
        await device.reloadReactNative();
      });

      it('should be clicked on "skip" navigate to home screen', async () => {
        const skipButton = element(by.id('skip_onboarding'));
        await waitFor(skipButton).toBeVisible().withTimeout(10000);

        await skipButton.tap();

        const homeScreen = await element(by.id('home_screen'));
        await expect(homeScreen).toBeVisible();
      });
    });
  });
});
