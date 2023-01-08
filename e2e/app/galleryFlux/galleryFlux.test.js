describe('Gallery Flux', () => {
  beforeAll(async () => {
    await device.launchApp({
      permissions: { camera: 'YES', medialibrary: 'YES' },
    });
  });

  describe('Skip Onboarding Screen', () => {
    it('should be clicked on "skip" navigate to home screen', async () => {
      const skipButton = element(by.id('skip_onboarding'));
      await waitFor(skipButton).toBeVisible().withTimeout(10000);

      await skipButton.tap();

      const homeScreen = await element(by.id('home_screen'));
      await expect(homeScreen).toBeVisible();
    });
  });

  describe('Show Gallery Screen', () => {
    it('should be have show gallery screen on press button', async () => {
      const galleryButton = await element(by.id('gallery_button'));

      await galleryButton.tap();

      const galleryScreen = await element(by.id('gallery_screen'));

      await expect(galleryScreen).toBeVisible();
    });
  });

  describe('Gallery Photos Flux', () => {
    it('should be have access gallery photos screen', async () => {
      const galleryPhotoButtonNavigate = await element(
        by.id('gallery_photos_navigate'),
      ).atIndex(0);

      await galleryPhotoButtonNavigate.tap();

      const galleryPhotos = await element(by.id('gallery_photos'));

      await expect(galleryPhotos).toBeVisible();
    });

    describe('Add Photo on Gallery', () => {
      it('should be have show button add photo', async () => {
        const buttonAddPhoto = await element(by.id('add_photo'));

        await expect(buttonAddPhoto).toBeVisible();
      });

      describe('Show Camera and take picture', () => {
        it('should be open camera on tap button add photo', async () => {
          const buttonAddPhoto = await element(by.id('add_photo'));

          await buttonAddPhoto.tap();
          const cameraScreen = await element(by.id('camera_screen'));

          await expect(cameraScreen).toBeVisible();
        });

        it('should be have take picture and show cropper', async () => {
          const buttonTakePicture = await element(by.id('take_picture'));

          await buttonTakePicture.tap();

          await waitFor(
            element(by.type('androidx.appcompat.view.menu.ActionMenuItemView')),
          )
            .toBeVisible()
            .withTimeout(10000);

          await element(
            by.type('androidx.appcompat.view.menu.ActionMenuItemView'),
          ).tap();

          await waitFor(element(by.id('photo_type_screen')))
            .toBeVisible()
            .withTimeout(10000);
        });
      });
      describe('Choose Gallery Type Image', () => {
        it('should be have write info photo and open modal', async () => {
          const photoTitle = await element(by.id('photo_title'));

          await photoTitle.typeText('Title photo 1');

          const photoDesc = await element(by.id('desc_title'));

          await photoDesc.typeText('Description photo 1');

          await element(by.id('keyboard_dismiss')).tap();

          const buttonModalType = await element(by.id('button_modal_type'));
          await buttonModalType.tap();

          const modal = await element(by.text('Select photo type'));
          await expect(modal).toBeVisible();
        });
      });
    });
  });
});
