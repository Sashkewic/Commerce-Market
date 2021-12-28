function toggleMenu() {
    const menuToggle = document.querySelector('.menu');
    menuToggle.classList.toggle('active');

    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
}