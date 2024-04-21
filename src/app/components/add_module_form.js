import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  
  Input,

} from "@nextui-org/react";


export default function Modalform(props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [moduleTitle, setModuleTitle] = React.useState("");
  const [moduleDescription, setModuleDescription] = React.useState("");

  const handleModuleTitleChange = (e) => setModuleTitle(e.target.value);
  const handleModuleDescriptionChange = (e) =>
    setModuleDescription(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Module Title: ", moduleTitle);
    console.log("Module Description: ", moduleDescription);

    // Add your logic here to submit the form
    const response = await fetch('https://course-mate-test-backend.onrender.com/courses/'+ props.course_code + '/topics/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        topic_name: moduleTitle,
        description: moduleDescription,
        resources : [],
        assignments : []
      })
    });

    if (response.ok) {
      console.log('Module added successfully');
      window.location.reload();
    } else {
      console.error('Error adding module');
    }
  };

  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        className="h-14 p-4 button-width"
      >
        Add Module
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit}>
              <ModalHeader className="flex flex-col gap-1">
                Add a new Module
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Module title"
                  placeholder="Enter your Module Name"
                  variant="bordered"
                  value={moduleTitle}
                  onChange={handleModuleTitleChange}
                />
                <Input
                  label="Module Description"
                  placeholder="Enter your Module Description"
                  variant="bordered"
                  value={moduleDescription}
                  onChange={handleModuleDescriptionChange}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" type="submit">
                  Add Module
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
