"use client"
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { RiDeleteBin6Line } from 'react-icons/ri'

export default function DeleteIssue({ id }: { id: number }) {
  const router = useRouter();
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();
  const [isDeleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      const response = await fetch(`/api/issues/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({ id }),
      });
      const result = await response.json();
      console.log(result);
      toast.success("Issue created successfully");
      router.push("/issues");
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setDeleting(false);
    }
  }
  return (
    <>
      <Button
        onPress={onOpen}
        startContent={<RiDeleteBin6Line size={16} />}
        color='danger'
        radius='sm'
        isLoading={isDeleting}
      >
        Delete issue
      </Button>
      <Modal
        isOpen={isOpen} onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Delete Issue</ModalHeader>
          <ModalBody>
            Are you sure you want to delete this issue?
          </ModalBody>
          <ModalFooter>
            <Button color="default" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button

              onClick={handleDelete}
              color="danger" onPress={onClose}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
