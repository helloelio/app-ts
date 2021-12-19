export default function hellperAcceptCoockies(): boolean {
  localStorage.setItem('coockie', 'true');
  return false;
}
