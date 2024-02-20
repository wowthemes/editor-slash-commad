
export const useForm = () => {
  const target = useState<number>('target');
  const deadline = useState<number>('deadline');
  const unit = useState<string>('unit', () => '%');
  const customUnit = useState<string>('customUnit', () => '$');
  const targetUnit = computed(() => (unit.value !== '%' ? (customUnit.value || '$') : unit.value));

  return {
    target,
    unit,
    customUnit,
    targetUnit,
    deadline,
  }
}