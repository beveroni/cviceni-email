const goodbye = (jmeno) => {
  const emailClosingElm = document.querySelector('.email__closing');
  emailClosingElm.textContent = `Na shledanou ${jmeno}`;
};
// goodbye('Pavel Ovesný');

const fillSubject = (predmet) => {
  document.querySelector('.email__subject').textContent = predmet;
};

const fillBody = (body, jmeno) => {
  const bodyElm = document.querySelector('.email__body');
  bodyElm.innerHTML = body;
  const closingElm = document.querySelector('.email__closing');
  closingElm.textContent = goodbye(jmeno);
};
