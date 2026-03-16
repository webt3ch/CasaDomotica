const gateStatus = document.getElementById('gate-status');
const ultimoUID = document.getElementById('ultimo-uid');
const ultimoAccesso = document.getElementById('ultimo-accesso');
const ultimaOrigine = document.getElementById('ultima-origine');
const moduloStatus = document.getElementById('modulo-status');
const onlineBadge = document.getElementById('online-badge');
const signalDot = document.getElementById('signal-dot');
const gateCard = document.getElementById('gate-card');
const openWrap = document.getElementById('open-wrap');
const closeWrap = document.getElementById('close-wrap');
const liveText = document.getElementById('live-text');
const inpLock = document.getElementById('inpLock');
const lockHint = document.getElementById('lock-hint');

let statoAttualeAperto = false;
let aggiornamentoDaServer = false;

function aggiornaUI(data) {
  gateStatus.textContent = data.cancello || 'SCONOSCIUTO';
  ultimoUID.textContent = data.ultimoUID || '-';
  ultimoAccesso.textContent = data.ultimoAccesso || 'Nessun evento';
  ultimaOrigine.textContent = data.ultimaOrigine || '-';
  moduloStatus.textContent = data.moduloOnline ? 'Operativo' : 'Non raggiungibile';

  if (data.moduloOnline) {
    onlineBadge.textContent = 'Online';
    onlineBadge.className = 'badge online';
    signalDot.classList.remove('offline');
  } else {
    onlineBadge.textContent = 'Offline';
    onlineBadge.className = 'badge offline';
    signalDot.classList.add('offline');
  }

  if (data.cancelloAperto) {
    gateCard.classList.add('open');
    gateCard.classList.remove('closed');
    openWrap.classList.add('active');
    closeWrap.classList.remove('active');
    lockHint.textContent = 'Premi per chiudere il cancello';
  } else {
    gateCard.classList.remove('open');
    gateCard.classList.add('closed');
    openWrap.classList.remove('active');
    closeWrap.classList.add('active');
    lockHint.textContent = 'Premi per aprire il cancello';
  }

  aggiornamentoDaServer = true;
  inpLock.checked = !!data.cancelloAperto;
  aggiornamentoDaServer = false;

  statoAttualeAperto = !!data.cancelloAperto;
}

async function aggiornaStato() {
  try {
    liveText.textContent = 'Aggiornamento...';

    const response = await fetch('/api/status');
    const data = await response.json();

    aggiornaUI(data);

    liveText.textContent = 'Sincronizzato';
  } catch (error) {
    console.error('Errore aggiornamento stato:', error);
    liveText.textContent = 'Errore connessione';
    onlineBadge.textContent = 'Offline';
    onlineBadge.className = 'badge offline';
    signalDot.classList.add('offline');
    moduloStatus.textContent = 'Connessione assente';
  }
}

async function inviaComando(url, label) {
  try {
    liveText.textContent = label + '...';
    await fetch(url);
    setTimeout(aggiornaStato, 250);
  } catch (error) {
    console.error('Errore comando:', error);
    liveText.textContent = 'Comando fallito';
    setTimeout(aggiornaStato, 500);
  }
}

inpLock.addEventListener('change', () => {
  if (aggiornamentoDaServer) return;

  if (inpLock.checked && !statoAttualeAperto) {
    inviaComando('/api/gate/open', 'Apertura');
  } else if (!inpLock.checked && statoAttualeAperto) {
    inviaComando('/api/gate/close', 'Chiusura');
  } else {
    aggiornaStato();
  }
});

aggiornaStato();
setInterval(aggiornaStato, 2000);