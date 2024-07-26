
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, } from "@nextui-org/react";
import githubimg from '../assets/github.png'
function Cards({ no, img, name, stack, stackimg, body, tech, github, live }) {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>
            <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7 transition-transform transform hover:scale-110">
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
                <CardFooter isFooterBlurred className="absolute hover:text-black text-white/60 hover:bg-transparent bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex flex-grow gap-2 items-center">
                        <Image
                            alt="Breathing app icon"
                            isBlurred
                            className="rounded-full w-9 h-9 object-center  "
                            src={stackimg}
                        />
                        <div className="flex flex-col cursor-default">
                            <p className="text-tiny ">Project: {no}</p>
                            <p className="text-tiny ">{name}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Button size="sm" onPress={onOpen} className="max-w-fit">View</Button>

                        <Modal
                            isOpen={isOpen}
                            placement="auto"
                            onOpenChange={onOpenChange}
                            backdrop="blur"
                            className="bg-zinc-900"
                        >
                            <ModalContent>
                                {(onClose) => (
                                    <>
                                        <ModalHeader className="flex flex-col gap-1 text-white/60">{name}</ModalHeader>
                                        <ModalBody>
                                            <div className="text-white/60">
                                                <img src={img} className="rounded-md" alt="" />
                                                <h1 className="text-lg font-semibold mt-1 ">Project <span className="text-purple-500">Overview</span></h1>
                                                <p className="whitespace-pre-line mt-1">
                                                    {body}
                                                </p>
                                                <div className="mt-2">
                                                    <h1 className="text-md font-semibold text-white/60 ">Tech <span className="text-purple-500">Stack</span></h1>
                                                    <div className="flex flex-wrap">
                                                        {tech.map((item) => (
                                                            <div key={item} className="border shadow-md shadow-zinc-600 rounded-md block w-auto mr-2 mt-2">
                                                                <span className="px-2 text-white/80 font-light">{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>


                                                <div className="flex gap-2 mt-4 ">
                                                    <div>
                                                        <img className="h-8 w-8" src={githubimg} alt="" />
                                                    </div>
                                                    <div className="text-center ">
                                                        <a className="text-sm font-semibold" href={github} target="_blank">Github</a>
                                                    </div>
                                                </div>
                                            </div>

                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="danger" variant="light" onPress={onClose}>
                                                Close
                                            </Button>
                                            {live === "" ? null : (
                                                <Button color="primary" onPress={onClose}>
                                                    <a href={live} target="_blank">See Live</a>
                                                </Button>
                                            )}

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