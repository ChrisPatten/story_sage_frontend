export default function getLastSeries() {
    const history = localStorage.getItem(`lastSeries`);
    return history ? JSON.parse(history) : null;
  }
  