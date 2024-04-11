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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

export default function Topicform(props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [moduleTitle, setModuleTitle] = React.useState("");
  const [moduleLink, setModuleLink] = React.useState("");
  const topic_name = props.topicname;

  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Video"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const handleModuleTitleChange = (e) => setModuleTitle(e.target.value);
  const handleModuleLinkChange = (e) => setModuleLink(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(topic_name);

    // Add your logic here to submit the form
    const response = await fetch(
      "https://course-mate-test-backend.onrender.com/courses/" +
        props.course_code +
        "/topics/" +
        topic_name +
        "/resources",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: selectedValue,
          title: moduleTitle,
          link: moduleLink,
        }),
      }
    );

    if (response.ok) {
      console.log("Module added successfully");
      window.location.reload();
    } else {
      console.error("Error adding module");
      console.log(props);
    }
  };

  return (
    <>
      <Button onPress={onOpen} color="primary" className="h-8 p-4 button-width">
        Add Resource
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit}>
              <ModalHeader className="flex flex-col gap-1">
                Add a new Resource
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Resource title"
                  placeholder="Enter your Resource Title"
                  variant="bordered"
                  value={moduleTitle}
                  onChange={handleModuleTitleChange}
                />
                <Input
                  label="Resource link"
                  placeholder="Enter your Link"
                  variant="bordered"
                  value={moduleLink}
                  onChange={handleModuleLinkChange}
                />
              </ModalBody>
              <ModalFooter>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" className="capitalize text-black">
                      {selectedValue}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Single selection example"
                    variant="shadow"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                  >
                    <DropdownItem key="Video">Video</DropdownItem>
                    <DropdownItem key="Article">Article</DropdownItem>
                    <DropdownItem key="Assignment">Assignment</DropdownItem>
                  </DropdownMenu>
                </Dropdown> 
                <Button color="primary" type="submit">
                  Add Resource
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
