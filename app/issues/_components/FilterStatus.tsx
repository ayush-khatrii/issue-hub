import React from 'react';
import { Status } from '@prisma/client';
import { Select, SelectItem } from '@nextui-org/react';
import { useRouter, useSearchParams } from 'next/navigation';

const statuses: { label: string; value: Status | 'ALL' }[] = [
  { label: 'All', value: 'ALL' },
  { label: 'Open', value: Status.OPEN },
  { label: 'In Progress', value: Status.IN_PROGRESS },
  { label: 'CLOSED', value: Status.CLOSED },
];

const FilterStatus = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleStatusChange = (status: string) => {
    const params = new URLSearchParams();

    if (status) params.append('status', status);
    if (searchParams.get('orderBy'))
      params.append('orderBy', searchParams.get('orderBy')!);

    const query = params.size ? '?' + params.toString() : '';
    router.push('/issues/list' + query);
  };

  return (
    <Select
      label="Filter by Status"
      className="max-w-xs"
      defaultSelectedKeys={[searchParams.get('status') || '']}
      onChange={(e) => handleStatusChange(e.target.value)}
    >
      {statuses.map((status) => (
        <SelectItem key={status.value} value={status.value}>
          {status.label}
        </SelectItem>
      ))}
    </Select>
  );
};

export default FilterStatus;