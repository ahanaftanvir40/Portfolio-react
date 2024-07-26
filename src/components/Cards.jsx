
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, } from "@nextui-org/react";
function Cards({no, img, name , stack , stackimg}) {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    
    return (
        <div>
            <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold"></p>
                    <h4 className="text-white/90 font-medium text-xl"></h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Relaxing app background"
                    className="z-0 w-[450px] h-[290px] object-center"
                    src={img}
                />
                <CardFooter isFooterBlurred className="absolute hover:bg-transparent bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex flex-grow gap-2 items-center">
                        <Image
                            alt="Breathing app icon"
                            isBlurred
                            className="rounded-full w-9 h-9 object-contain  bg-black"
                            src={stackimg}
                        />
                        <div className="flex flex-col">
                            <p className="text-tiny text-white/60">Project: {no}</p>
                            <p className="text-tiny text-white/60">{name}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Button size="sm" onPress={onOpen} className="max-w-fit">View</Button>

                        <Modal
                            isOpen={isOpen}
                            placement="auto"
                            onOpenChange={onOpenChange}
                            backdrop="blur"
                        >
                            <ModalContent>
                                {(onClose) => (
                                    <>
                                        <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                                        <ModalBody>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Nullam pulvinar risus non risus hendrerit venenatis.
                                                Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Nullam pulvinar risus non risus hendrerit venenatis.
                                                Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                            </p>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="danger" variant="light" onPress={onClose}>
                                                Close
                                            </Button>
                                            <Button color="primary" onPress={onClose}>
                                                Action
                                            </Button>
                                        </ModalFooter>
                                    </>
                                )}
                            </ModalContent>
                        </Modal>
                    </div>
                </CardFooter>
            </Card>

        </div>
    )
}

export default Cards