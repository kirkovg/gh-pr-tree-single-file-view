const clickableTreeElementClassName = 'ActionList-content';
const fileDiffContainerClassName = 'js-diff-progressive-container';

Array.prototype.filter
  .call(document.getElementsByClassName(clickableTreeElementClassName), a => a.nodeName === 'A')
  .forEach(element => {
    element.addEventListener('click', event => {
      event.preventDefault();
      Array.prototype.forEach.call(document.getElementsByClassName(fileDiffContainerClassName), container => {
        Array.prototype.filter
          .call(container.childNodes, node => node.nodeName === 'DIV')
          .forEach(fileContainer => {
            if (fileContainer.id !== element.hash.substring(1, element.hash.length)) {
              fileContainer.style.display = 'none';
            } else {
              fileContainer.style.display = 'block';
            }
          });
      });
    });
  });
